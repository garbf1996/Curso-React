import { useRecoilState } from 'recoil';
import { formState } from '../state/atoms';

export const useForm = () => {
const [ form, setForm ] = useRecoilState( formState );

const onInputChange = ({ target }) => {
const { name, value } = target;
setForm({
...form,
[ name ]: value
});
}

const onResetForm = () => {
setForm({
name: '',
email: '',
phone: '',
message: '',
});
}

return {
form,
onInputChange,
onResetForm,
}
