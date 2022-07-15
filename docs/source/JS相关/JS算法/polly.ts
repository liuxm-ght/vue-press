export interface IParams {
  maxCount?: number; // 最大轮询次数
  intervalTime?: number; // 每次轮询增加时间长度
  maxInterval?: number; // 最大轮询时间长度
}
export interface IProcessPayload<T> {
  data: T;
  count: number;
  resolve?: (data: T) => void;
  reject?: (err: any) => void;
}
/**
 * 
 * error 失败
 * process 继续轮询
 * finish 结束轮询
 */
export type IProgressType = 'error' | 'process' | 'finish';
const defaultConfig = {
  maxCount: 120,
  intervalTime: 1000,
  maxInterval: 1600,
};
export class PollingFun {
  timeoutTimer: any;
  cancelWhile: any;
  constructor(private config: IParams = { maxCount: 120, intervalTime: 1000, maxInterval: 1600 }) {
    this.config = { ...defaultConfig, ...config };
  }
  cancel() {
    if (this.cancelWhile) {
      this.cancelWhile();
      this.cancelWhile = null;
    }
    if (this.timeoutTimer) {
      clearTimeout(this.timeoutTimer);
    }
  }
  pollingSingleTask = async <T>(onProgress: (data: IProcessPayload<T>) => IProgressType, ajaxFun: () => Promise<T>) => {
    const { maxCount, intervalTime, maxInterval } = this.config;
    let pollingCount = 0;
    let stopPolling = false;
    this.cancel();
    this.cancelWhile = () => (stopPolling = true);
    while (!stopPolling && pollingCount < maxCount) {
      // 刚开始密集，后续间隔加长，最长1s。
      let realIntervalTime = Math.floor(pollingCount / 10) * 200 + intervalTime; // eslint-disable-line
      realIntervalTime = Math.min(realIntervalTime, maxInterval);
      try {
        const resData = await ajaxFun();
        if (stopPolling) {
          return Promise.reject('cancel');
        }
        const progressRes = onProgress({ data: resData, count: pollingCount });
        switch (progressRes) {
          case 'finish':
            stopPolling = true;
            return Promise.resolve(resData);
          case 'error':
            stopPolling = true;
            return Promise.reject(resData);
          default:
            await new Promise(resolve => {
              this.timeoutTimer = setTimeout(resolve, realIntervalTime);
            });
            break;
        }
      } catch (error) {
        stopPolling = true;
        return Promise.reject(error);
      }
      pollingCount += 1;
    }
    if (pollingCount >= maxCount) {
      return Promise.reject('overMaxCount');
    }
  };
}

// 重试方案
// 首先重试机制意味着我们需要多次请求失败接口，先解决这个问题，大概两张方案：
  // socket
  // 轮询
  // 但是我们没有后端支持，socket直接干掉。那么只能通过轮询去尝试。先贴出轮询代码

// 我们需要请求三个接口，分别是接口a、接口b和接口c。请求过程中由于服务不稳定导致a成功了但b和c失败了。
// 这种情况我们要么直接报错误信息，有点不友好；要么只使用a返回的数据，一般这种情况前端都会有默认值，页面自然而然展示出了默认信息，
// 用户就会用错误的数据做出错误的决策，这是很严重的错误。为了解决上述问题，本文实现了一个容错机制，去尝试解决这个问题。

//参考文章：https://juejin.cn/post/6943908939822006308