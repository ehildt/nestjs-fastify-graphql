import { FastifyReply, FastifyRequest } from 'fastify';

export interface FastifyRes extends FastifyReply {}
export interface FastifyReq extends FastifyRequest {
  user: any;
}
