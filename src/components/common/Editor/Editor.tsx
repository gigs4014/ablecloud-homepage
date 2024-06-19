import { Dispatch, SetStateAction } from 'react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const Editor = ({ data, setData }: { data: string; setData: Dispatch<SetStateAction<string>> }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      onBlur={(event, editor) => {
        const editorData = editor.getData();

        setData(editorData);
      }}
    />
  );
};

export default Editor;
