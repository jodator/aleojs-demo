import { hello } from '../artifacts/js/myprogram';

const walletAddress =
  'aleo1uwuxqnhkg9wsmqvsfjdm3jqsevx4fgme2ml405sgduc66d4cpc8swkn28j';

test('hello', async () => {
  expect(await hello(4, 2)).toBe(2);
});
