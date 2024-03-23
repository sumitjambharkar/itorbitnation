"use client"
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';


const page = () => {

    const editorRef = useRef(null);
    const [text, setText] = useState("")

  return (
    <div className='resume'>
        
    <Editor
      
      apiKey="qo462wysj4yv99by9ki4sbxc7rxjhjecbsq8kqm6vh8ayrk0"
      onInit={(evt, editor) => (editorRef.current = editor)}

      init={{
        height:"100vh",
        menubar: true,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      value={text}
      onEditorChange={(text) =>
        setText({
          target: { name: "text", value: text },
        })
      }
    />
    
    </div>
  )
}

export default page
