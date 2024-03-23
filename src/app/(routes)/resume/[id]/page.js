"use client";
import config from "@/config";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";


const page = ({ params }) => {
  const editorRef = useRef(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(`${config}/api/resume/${params.id}`);
      setText(result.data.content);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const printResume = () => {
    const editorContent = editorRef.current.getContent();
    const printWindow = window.open("", "_blank");
    printWindow.document.write(editorContent);
    printWindow.document.close();
    printWindow.print();
  };
  const generatePDF = async () => {
    
  };

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading.......</h1>
      </div>
    );
  }

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Free Download & Create Resume</h1>
          <div className="card_center">
            <button onClick={printResume} className="card-button">
              Print
            </button>
            <button onClick={generatePDF} className="card-button">
              Download
            </button>
          </div>
        </div>
        <div className="cards-container">
          <Editor
            apiKey="qo462wysj4yv99by9ki4sbxc7rxjhjecbsq8kqm6vh8ayrk0"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: "100vh",
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
      </div>
    </section>
  );
};

export default page;
