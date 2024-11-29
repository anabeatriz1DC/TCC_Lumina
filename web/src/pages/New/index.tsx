import {
    Button,
    ButtonContainer,
    CategoryBox,
    CategoryContainer,
    CategoryImage,
    Container,
    Form,
    FormTitle,
    MapContainer,
    Section,
} from "./styles";

import { useEffect, useState } from "react";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { TileLayer, Marker, useMap } from "react-leaflet";
import { categories } from "./categories";
import { toast } from "react-toastify";
import useGetLocation from "../../hooks/useGetLocaton";
import Input from "../../components/Input/Index";
import { useNavigate } from "react-router-dom";

export default function New() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        description: "",
        contact: "",
        category: "",
        coords: [0, 0],
    });

    const MapEventListener = () => {
        const map = useMap();

        useEffect(() => {
            const handleClick = (event: LeafletMouseEvent) => {
                setFormValues((prev) => ({
                    ...prev,
                    coords: [event.latlng.lat, event.latlng.lng],
                }));
            };

            map.on("click", handleClick);

            return () => {
                map.off("click", handleClick);
            };
        }, [map]);

        return null;
    };
    
    const { coords } = useGetLocation();

    async function onSubmit() {
        const request = await fetch("http://localhost:3000/donation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...formValues,
                latitude: formValues.coords[0],
                longitude: formValues.coords[1],
            }),
        });

        if (request.ok) {
            toast("Estabelecimento gravado com sucesso!", {
                type: "success",
                autoClose: 2000,
                onClose: () => navigate("/"),
            });
        }
    }

    if (!coords) {
        return <h1>Obtendo localização ...</h1>;
    }

    return (
        <Container>
            <Form
                onSubmit={(ev) => {
                    ev.preventDefault();
                    onSubmit();
                }}
            >
                <FormTitle>Cadastro do comércio local</FormTitle>

                <Section>Dados</Section>

                <Input
                    label="Nome do local"
                    name="name"
                    value={formValues.name}
                    onChange={setFormValues}
                />

                <Input
                    label="Descrição"
                    name="description"
                    value={formValues.description}
                    onChange={setFormValues}
                />

                <Input
                    label="Contato"
                    name="contact"
                    value={formValues.contact}
                    onChange={setFormValues}
                />

                <Section>Endereço</Section>

                <MapContainer
                    center={
                        {
                            lat: coords[0],
                            lng: coords[1],
                        } as LatLngExpression
                    }
                    zoom={13}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={
                            [formValues.coords[0], formValues.coords[1]] as LatLngExpression
                        }
                    />

                    <MapEventListener></MapEventListener>
                </MapContainer>

                <Section>Categoria</Section>

                <CategoryContainer>
                    {categories.map((category) => (
                        <CategoryBox
                            key={category.key}
                            onClick={() => {
                                setFormValues((prev) => ({ ...prev, category: category.key }));
                            }}
                            isActive={formValues.category === category.key}
                        >
                            <CategoryImage src={category.url} />
                            {category.label}
                        </CategoryBox>
                    ))}
                </CategoryContainer>

                <ButtonContainer>
                    <Button type="submit">Salvar</Button>
                </ButtonContainer>
            </Form>
        </Container>
    );
}