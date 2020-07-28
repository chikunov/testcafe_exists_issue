import { Selector } from "testcafe";

fixture`MyFixture`.page`http://localhost:3000`;

test("[exists] without timeout", async (t) => {
  await t.expect(Selector(".dynamic").exists).ok();
});

test("[exists] selector with timeout", async (t) => {
  await t.expect(Selector(".dynamic", { timeout: 10000 }).exists).ok();
});

test("[exists] check with timeout", async (t) => {
  await t.expect(Selector(".dynamic").exists).ok({ timeout: 10000 });
});

test("[visible] without timeout", async (t) => {
  await t.expect(Selector(".dynamic").visible).ok();
});

test("[visible] selector with timeout", async (t) => {
  await t.expect(Selector(".dynamic", { timeout: 10000 }).visible).ok();
});

test("[visible] check with timeout", async (t) => {
  await t.expect(Selector(".dynamic").visible).ok({ timeout: 10000 });
});
