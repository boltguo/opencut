import { describe, expect, test } from "vitest";
import { buildStickerId, parseStickerId } from "../sticker-id";

describe("sticker-id strict mode", () => {
	test("parses provider-prefixed IDs", () => {
		expect(parseStickerId({ stickerId: "logos:openai" })).toEqual({
			providerId: "logos",
			providerValue: "openai",
		});
		expect(parseStickerId({ stickerId: "shapes:circle" })).toEqual({
			providerId: "shapes",
			providerValue: "circle",
		});
	});

	test("throws for IDs without provider prefix", () => {
		expect(() => parseStickerId({ stickerId: "home" })).toThrow();
	});

	test("throws for malformed IDs", () => {
		expect(() => parseStickerId({ stickerId: "" })).toThrow();
		expect(() => parseStickerId({ stickerId: "logos:" })).toThrow();
		expect(() => parseStickerId({ stickerId: ":mdi:home" })).toThrow();
	});

	test("builds sticker IDs unchanged", () => {
		expect(
			buildStickerId({
				providerId: "logos",
				providerValue: "openai",
			}),
		).toBe("logos:openai");
	});
});
