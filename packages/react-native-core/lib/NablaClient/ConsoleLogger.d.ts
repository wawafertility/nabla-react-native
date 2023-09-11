import { Logger } from './Logger';
import { NablaError } from '../types';
export declare class ConsoleLogger implements Logger {
    debug(tag: string, message: string, error: NablaError | undefined): void;
    info(tag: string, message: string, error: NablaError | undefined): void;
    warn(tag: string, message: string, error: NablaError | undefined): void;
    error(tag: string, message: string, error: NablaError | undefined): void;
}
