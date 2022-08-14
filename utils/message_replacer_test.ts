import { MessageReplacer } from "./message_replacer.ts";
import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";

Deno.test(MessageReplacer.name, async (t) => {
  const matcher = "$key";
  const replacer = new MessageReplacer(matcher);
  await t.step("replace matched string with some value", () => {
    const dummyMessage = "$key must be a string";

    const result = replacer.replace(dummyMessage, "fullName");

    assertEquals(result, "fullName must be a string");
  });
});
