import { ExecutionContext, Injectable, UseGuards } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
class GraphqlLocalAuthGuard extends AuthGuard('gqllocal') {
  // in rest api, passport retrieves the args from the respective http methods body.
  // in gql, we don't have the concept of methods, instead data is defined as fields.
  // this is why we need to pass the gql fields/args to the body.
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;
    const args = ctx.getArgs();
    if (!args.input) gqlReq.body = args;
    else gqlReq.body = args.input;
    return gqlReq;
  }
}

export const UseGraphqlLocalAuthGuard = () => UseGuards(GraphqlLocalAuthGuard /** use more guards here */);
