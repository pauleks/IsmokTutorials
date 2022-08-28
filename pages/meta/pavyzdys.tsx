import { useRouter } from "next/router";
import Image from "next/image";

import CodePreview from "../../components/CodePreview";
import LessonLayout from "../../components/LessonLayout";

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
            <LessonLayout lessonConfiguration={LessonConfiguration} categoryId={router.pathname.split("/")[1]}>
                <p>Čia - pavyzdinis puslapis :D.</p>

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
            </LessonLayout>
        </>
    );
};

export default Lesson;
