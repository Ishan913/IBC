import { useState, useEffect, useRef } from 'react';

export const useForm= (initialState = {}, gqlObj, callback) => {

    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(initialState)
    const [result, setResult] = useState('');
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current)
        callback();
        else
        didMountRef.current = true;
        // eslint-disable-next-line
    }, [result])

    const action = function() {}
    const loading =false
    
    // const [action, {loading}] = useMutation(gqlObj, {
    //     update(_, {data: result}) {
    //         setResult(result)
    //     },
    //     onError(err) {
    //         setErrors(err.graphQLErrors[0].extensions.errors)
    //     },
    //     variables: values
    // })
    
    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value})
        setErrors({})
    }


    const onSubmit = (event) => {
        event.preventDefault();
        action()
    }

    return {
        onChange,
        onSubmit,
        values,
        errors,
        setErrors,
        loading,
        result,
        setValues
    }


}