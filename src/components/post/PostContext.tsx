import { Provider, createContext, useContext } from 'react';

import { Post } from '@/types';

const PostContext = createContext<Post | undefined>(undefined);

export const PostContextProvider = PostContext.Provider as Provider<Post>;

export function usePostContext() {
  const postContext = useContext(PostContext);

  if (postContext === undefined) {
    throw new Error('usePostContext must be used within a PostContextProvider');
  }

  return postContext;
}
