import { IFastifySmallLoggerConfig } from "fastify-small-logger";
import { ICronJobManagerConfig } from "./cron-job-manager";

export type IApiServerConfig = {
    enable: boolean
    port: number
    hostname: string
    backlog: number
    prefix: string
    connection_timeout: number
    keep_alive_timeout: number
    body_limit: number
    trust_proxy: boolean
}

export interface IAppConfig {
    logger: IFastifySmallLoggerConfig
    api: IApiServerConfig
    manager: ICronJobManagerConfig
}