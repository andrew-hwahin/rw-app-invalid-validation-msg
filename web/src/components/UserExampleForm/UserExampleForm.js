import {
  FieldError,
  Form,
  FormError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserExampleForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.userExample?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Age
        </Label>
        <NumberField
          name="age"
          defaultValue={props.userExample?.age}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true, min: 1, max: 18 }}
        />
        <FieldError name="age" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserExampleForm
