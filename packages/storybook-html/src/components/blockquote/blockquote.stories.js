// import styles
import './blockquote.scss';

// import HTML template strings
import blockquoteHTML from './blockquote.html';
import blockquoteDarkHTML from './blockquote_dark.html';
import blockquoteBoxedHTML from './blockquote_boxed.html';

// documentation
import docs from './blockquote.docs.mdx';

export default {
  title: 'Components/Blockquote',
  parameters: {
    docs: {
      page: docs
    },
    layout: "padded",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const blockquoteDefault = () => {
  return blockquoteHTML;
};
blockquoteDefault.storyName = 'blockquote';

export const blockquoteDark = () => {
  return blockquoteDarkHTML;
};
blockquoteDark.storyName = 'Dark';
blockquoteDark.parameters = {
  docs: {
     inlineStories: false
  },
  backgrounds: {
    default: 'Dark'
  } 
};

export const blockquoteBoxed = () => {
  return blockquoteBoxedHTML;
};
blockquoteBoxed.storyName = 'Boxed';
