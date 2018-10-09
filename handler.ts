import { IContext, HttpRequest } from 'azure-functions-typedefinitions';

export function hello (context: IContext, req: HttpRequest): void {
  context.log.info('Hello from a typed function!');

  const resBody = {
    invocationId: context.invocationId,
    name: context.executionContext.functionName,
    startTimeUtc: context.bindingData.sys.utcNow
  };

  context.res.json(resBody);
}
