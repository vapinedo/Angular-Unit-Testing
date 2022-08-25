import { LoggerService } from "./logger.service";

describe("LoggerService", () => {
    let service: LoggerService;

    beforeEach(() => {
        service = new LoggerService();
    });

    it("should not have any messages at starting", () => {
        // act
        const count = service.messageList.length;

        // assert
        expect(count).toBe(0);
    });

    it("should add the message when log method is called", () => {
        // act
        service.log("message");

        // assert
        expect(service.messageList.length).toBe(1);
    });

    it("should clear all the the message list when clear is called", () => {
        service.log("One simple message");

        // act
        service.clear();
        const count = service.messageList.length;

        // assert
        expect(count).toBe(0);
    });

});