import { createParser, defaultRules } from 'svelte-simple-markdown';

const rules = defaultRules.clone();
const parser = createParser(rules);

export const markdownConfig = {
	parser
};
