import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import LessonPresentation from "../../components/LessonPresentation";
import CodePreview from "../../components/CodePreview";

const LessonConfiguration = {
    name: "Pavyzdys",
    description: "Pavyzdinis puslapis",
    author: ['@TheOnlyGhostwolf'],
    rowNumber: 1,
}

const Lesson = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{LessonConfiguration.name} - IšmOK pamokos</title>
            </Head>
            <button onClick={() => router.push(`/`)}>
                ↜ grįžk atgal
            </button>
            <LessonPresentation lessonName={LessonConfiguration.name} description={LessonConfiguration.description} authors={LessonConfiguration.author} />
            <Image src="/images/lessons/cpp/pristatymas/1.png" alt="Pavyzdys" width={702} height={452} />
            <CodePreview language="cpp" startWithRow={3}>
                {`#include <iostream>
using namespace std;

int main()
{
    cout << "Hello, world!" << endl;
    return 0;
}`}
            </CodePreview>
        </>
    );
};

export default Lesson;
