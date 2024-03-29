import React from "react";

interface Props {
	title: string;
}

const ProductsPageHeader = ({ title }: Props) => {
	return <h1>{title}</h1>;
};

export default ProductsPageHeader;
