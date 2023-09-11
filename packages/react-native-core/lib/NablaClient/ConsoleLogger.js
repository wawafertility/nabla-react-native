export class ConsoleLogger {
    debug(tag, message, error) {
        formatAndLog(tag, message, error, console.debug);
    }
    info(tag, message, error) {
        formatAndLog(tag, message, error, console.info);
    }
    warn(tag, message, error) {
        formatAndLog(tag, message, error, console.warn);
    }
    error(tag, message, error) {
        formatAndLog(tag, message, error, console.error);
    }
}
function formatAndLog(tag, message, error, logFunction) {
    let log = `[${tag}] ${message}`;
    if (error) {
        const errorDescription = JSON.stringify(error, null, 2);
        log += `\nerror: ${error.message}\n${errorDescription}`;
    }
    logFunction(log);
}
//# sourceMappingURL=ConsoleLogger.js.map