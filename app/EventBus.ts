export default class EventBus {
    public static on(
        event: string,
        callback: (...args: unknown[]) => unknown
    ): void {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.addEventListener(event, ({ detail }) => {
            return callback(detail);
        });
    }

    public static dispatch(event: string, data: unknown): void {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    }

    public static remove(
        event: string,
        callback: (...args: unknown[]) => unknown
    ): void {
        document.removeEventListener(event, callback);
    }
}
