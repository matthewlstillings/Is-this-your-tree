const FormikForm = withFormik({
    mapPropsToValues: (props, upload, margins, family, type, venation, arrangement, lobing, texture, shape, dryFruits, fleshyFruits, other, commonName, latinName) => ({
        onSubmit: props.onSubmit,
        commonName: props.commonName || '',
        latinName: latinName || '',
        family: family || '',
        type,
        venation, 
        arrangement, 
        lobing, 
        texture, 
        shape, 
        dryFruits, 
        fleshyFruits, 
        other,
        margins,
        upload: upload || ''
    }),
    validationSchema: Yup.object().shape({
        commonName: Yup.string().required('Must Have a Name'),
        latinName: Yup.string().required('Must Have a Latin Name'),
        family: Yup.string().required('Must Have a Family')
    }), 
    handleSubmit(values, {resetForm, setErrors, setSubmitting, props}) {
        console.log(values);
        
        setSubmitting(false);
        values.onSubmit();
    }
})()
