import { Command } from "https://deno.land/x/cliffy@v0.23.0/command/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.23.0/ansi/mod.ts";
import { quotableRandom } from "./mod.ts";

const root = new Command()
  .name("ranmess")
  .version("2.2.0")
  .description("Get random quotes.")
  .arguments("[times]");

const {
  args: [length = 1],
} = await root.parse(Deno.args);

async function printQuote() {
  const quote = await quotableRandom();

  const content = colors.blue(quote.content);
  const author = colors.green(quote.author);

  console.log(`${content} \n - ${author} \n`);
}

Promise.all(Array.from({ length }, printQuote));
