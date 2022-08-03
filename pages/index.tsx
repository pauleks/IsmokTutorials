import type { NextPage } from "next";
import { getCategoriesOverview } from "../lib/lessons";
import Link from "next/link";
import { CategoryInterface } from "../lib/types";

export function getStaticProps() {
  const categories = getCategoriesOverview();
  return {
    props: {
      categories,
    },
  };
}

const Index = ({ categories }: { categories: CategoryInterface[] }) => {
  const categoriesList = categories.map((category) => {
    return (
      <div key={category.category}>
        <h4 style={{ margin: "1rem 0 0 0" }}>
          <Link href={category.category}>{category.name + " ↝"}</Link>
        </h4>
        <p style={{ margin: "8px 0 2rem 0" }}>{category.description}</p>
      </div>
    );
  });

  return (
    <>
      <div
        style={{
          backgroundColor: "#f1f1f1",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            letterSpacing: "2px",
          }}
        >
          Sveiki atvykę į
        </p>
        <h1
          style={{
            margin: "4px",
            fontSize: "4rem",
          }}
        >
          IšmOK!
        </h1>
        <p>
          Paprastai ir lengvai paaiškintos interaktyvios programavimo pamokos
          visiems, besidomintiems programavimo mokslu.
        </p>
      </div>
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#FFEC70",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <p>
          <b>
            ⚠️ Šis projektas yra tik dar pradinėje kūrimo stadijoje ir nėra
            paruoštas visuotiniam naudojimui.
          </b>
        </p>
      </div>
      <h2>Prieinamos pamokos</h2>
      {categoriesList}
    </>
  );
};

export default Index;
