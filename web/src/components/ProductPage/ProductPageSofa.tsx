import React, { useState, useEffect } from "react";
import Photo from "./Overview/Photo";
import ProductPage from "./ProductPage";
import { getSofas } from "../../Admin/store/modules/sofas/actions/getSofas";
import { useParams } from "react-router";
import { getSofa } from "../../providers/api/sofas";
import { Sofa } from "@mebel-shop/data-objects";
import { baseUrl } from "../../providers/api/api";

const ProductPageSofa = () => {
	const [sofa, setSofa] = useState<(Sofa & { photos: string[] }) | null>(
		null
	);

	const { id } = useParams();

	useEffect(() => {
		loadSofa(+id);
	}, []);

	const loadSofa = async (id: number) => {
		try {
			const sofa = await getSofa(id);
			setSofa(sofa);
		} catch (e) {
			console.log(e);
		}
	};

	if (!sofa) return null;

	const photos = sofa.photos.map((a) => (
		<Photo url={`${baseUrl}/static/sofas/photos/${a}`} />
	));

	if (!sofa.characteristics) return null;

	const dataSource: string[][] = [
		["Ширина", `${sofa.characteristics.width} см`],
		["Висота", `${sofa.characteristics.height} см`],
		["Глубина", `${sofa.characteristics.depth} см`],
		["Вага", `${sofa.characteristics.weight} кг`],
		["Максимальне навантаження", `${sofa.characteristics.maxWeight} кг/м2`],
		["Колір", `${sofa.characteristics.color}`],
		["Матеріал оббивки", `${sofa.characteristics.upholsteryMaterial}`],
		["Максимальне корпусу", `${sofa.characteristics.frameMaterial}`],
		["Особливості", `${sofa.characteristics.features}`],
		["Гарантія", `${sofa.characteristics.guarantee}`]
	];

	return (
		<ProductPage>
			<ProductPage.Overview photos={photos}>
				<ProductPage.Overview.Title text={sofa.name} />
				<ProductPage.Overview.Description
					text={sofa.description}
					price={sofa.price}
				/>
			</ProductPage.Overview>
			<ProductPage.Characteristics
				characteristics={dataSource}
			></ProductPage.Characteristics>
		</ProductPage>
	);
};

export default ProductPageSofa;
