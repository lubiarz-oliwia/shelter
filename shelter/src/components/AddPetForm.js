import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addAnimal, getAnimalsDetails } from '../actions/animals';
import { useHistory } from "react-router-dom";

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Imię zbyt krótkie.')
        .max(50, 'Imię zbyt długie.')
        .required('To pole jest wymagane.'),
    sex: Yup.string()
        .oneOf(['pies', 'suczka'])
        .required('To pole jest wymagane.'),
    age: Yup.number()
        .max(15, 'Zbyt duza liczba')
        .required('To pole jest wymagane.'),
    size: Yup.string()
        .oneOf(['maly', 'sredni', 'duzy'])
        .required('To pole jest wymagane.'),
    weight: Yup.number()
        .required('To pole jest wymagane.'),
    breed: Yup.string()
        .min(2, 'Nazwa rasy jest zbyt krótka.')
        .max(50, 'Nazwa rasy jest zbyt długa.')
        .required('To pole jest wymagane.'),
    description: Yup.string()
        .max(50, 'Opis jest zbyt długi.')
});

function AddPetForm() {
    let history = useHistory();

    return (
        <div>
            <h1>Dodaj zwierzę</h1>
            <Formik
                initialValues={{
                    name: "",
                    sex: "",
                    age: "",
                    size: "",
                    weight: "",
                    breed: "",
                    description: "",
                }}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                    const all_values = {
                        ...values, add_date: new Date().toLocaleDateString('pl-PL', {
                            day: 'numeric', month: 'short', year: 'numeric'
                        }).replace(/ /g, '-')
                    }
                    addAnimal(all_values).then(() => {
                        history.push('/stronaadmina');
                        getAnimalsDetails(all_values);
                    })
                }}
            >
                {({ errors, touched }) => (
                    <Form className='addpet_form'>
                        <label>Imię</label>
                        <Field name="name" label='name' />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <label>Płeć</label>
                        <div>
                            <Field type="radio" name="sex" value="pies" />
                            <label>pies</label>
                            <Field type="radio" name="sex" value="suczka" />
                            <label>suczka</label>
                            {errors.sex && touched.sex ? (
                                <div>{errors.sex}</div>
                            ) : null}
                        </div>
                        <label>Wiek</label>
                        <Field name="age" type="number" />
                        {errors.age && touched.age ? <div>{errors.age}</div> : null}
                        <label>Rozmiar</label>
                        <Field name="size" as="select">
                            <option value="wybierz">--wybierz--</option>
                            <option value="maly">Mały</option>
                            <option value="sredni">Średni</option>
                            <option value="duzy">Duzy</option>
                        </Field>
                        {errors.size && touched.size ? (
                            <div>{errors.size}</div>
                        ) : null}
                        <label>Waga</label>
                        <Field name="weight" type='number' />
                        {errors.weight && touched.weight ? (
                            <div>{errors.weight}</div>
                        ) : null}
                        <label>Rasa</label>
                        <Field name="breed" label='breed' />
                        {errors.breed && touched.breed ? (
                            <div>{errors.breed}</div>
                        ) : null}
                        <label>Dodatkowe informacje</label>
                        <Field as='textarea' name="description" />
                        {errors.description && touched.description ? (
                            <div>{errors.description}</div>
                        ) : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddPetForm;
