import { Button, Text, TextInput, View } from "react-native";
import { globalStyle } from "../styles/global";
import { Formik } from "formik";
import * as yup from 'yup'

const reviewSchema = yup.object({ // key value
    title: yup.string()
        .required()
        .min(4), // title should be a string and min length is 4
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyle.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                // {/* values => all the fileds is into values */}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>

                        <TextInput
                            style={globalStyle.input}
                            placeholder="Review title"
                            onChangeText={props.handleChange('title')} // change the value of title
                            value={props.values.title} // value of text input 
                            onBlur={props.handleBlur('title')} // handleBlur => the error will be show when past from field to another if not validate
                        />
                        <Text style={globalStyle.errorText}>{ props.touched.title && props.errors.title }</Text>

                        <TextInput
                            multiline
                            style={globalStyle.input}
                            placeholder="Review body"
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyle.errorText}>{ props.touched.body && props.errors.body }</Text>

                        <TextInput
                            style={globalStyle.input}
                            placeholder="Rating (1-5)"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyle.errorText}>{ props.touched.rating && props.errors.rating }</Text>

                        <Button title="submit" color="maroon" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}