'use client';
import dynamic from 'next/dynamic';
import React, { useState, useRef } from 'react';


const MarkdownEditor = dynamic(
    () => import('@uiw/react-md-editor').then(mod => mod.default),
    { ssr: false }
);


function Markdown({ content }: { content: string }) {
    const [markdown, setMarkdown] = useState(content);

    return (
        <div className="my-4">
            <MarkdownEditor
                value={markdown}
                onChange={(value) => setMarkdown(value || '')}
                height="600px"
                enableScroll={true}
            />
        </div>
    );
}

export default Markdown;
