"use client";

import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function RichTextEditor({ value, onChange }) {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ 'align': [] }],
            ['clean']
          ]
        }
      });

      quillRef.current.on('text-change', () => {
        const content = quillRef.current.root.innerHTML;
        if (content !== value) {
          onChange(content);
        }
      });
    }
  }, [onChange]);

  useEffect(() => {
    if (quillRef.current && quillRef.current.root.innerHTML !== value) {
      const selection = quillRef.current.getSelection();
      quillRef.current.root.innerHTML = value;
      if (selection && quillRef.current.hasFocus()) {
        quillRef.current.setSelection(selection);
      }
    }
  }, [value]);

  return <div ref={editorRef} />;
}