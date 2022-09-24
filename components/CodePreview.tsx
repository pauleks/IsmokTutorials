import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { useTheme } from "next-themes";
import styles from "../styles/components/CodePreview.module.css";

const CodePreview = ({ language, startWithRow, children }: { language: string, startWithRow: number | undefined, children: string }) => {
    const { theme } = useTheme();

    return (
        <SyntaxHighlighter
            language={language}
            style={theme === "dark" ? a11yDark : a11yLight}
            showLineNumbers={true}
            startingLineNumber={startWithRow || 1}
        >
            {String(children).replace(/\n$/, '').replace(/^\s+/, '')}
        </SyntaxHighlighter>
    )
}

export default CodePreview;