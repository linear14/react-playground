import { PropsWithChildren, useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Category } from "../types/category";

interface Props extends PropsWithChildren {}

const PageLayout = ({ children }: Props) => {
  const [headerCategoryList, setHeaderCategoryList] = useState<Category[]>([]);
  const [footerCategoryList, setFooterCategoryList] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategoryList() {
      const response = await fetch("/mock/categories.json");
      const result = await response.json();
      setHeaderCategoryList(result.header);
      setFooterCategoryList(result.footer);
    }

    fetchCategoryList();
  }, []);

  return (
    <>
      <Header categoryList={headerCategoryList} />
      {children}
      <Footer categoryList={footerCategoryList} />
    </>
  );
};

export default PageLayout;
