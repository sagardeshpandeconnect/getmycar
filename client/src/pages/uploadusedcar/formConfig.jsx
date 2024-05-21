import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@chakra-ui/react";

const formConfig = [
  {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Enter your name",
    validation: z.string().min(1, "Name is required"),
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    validation: z.string().email("Invalid email address"),
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    validation: z.string().min(6, "Password must be at least 6 characters"),
  },
  {
    label: "Date of Birth",
    name: "dob",
    type: "date",
    validation: z.string().min(1, "Date of Birth is required"),
  },
  {
    label: "Gender",
    name: "gender",
    type: "radio",
    options: ["Male", "Female", "Other"],
    validation: z.string().min(1, "Gender is required"),
  },
  {
    label: "Interests",
    name: "interests",
    type: "checkbox",
    options: ["Sports", "Music", "Movies"],
    validation: z.array(z.string()).min(1, "At least one interest is required"),
  },
  {
    label: "Country",
    name: "country",
    type: "select",
    options: ["USA", "Canada", "UK", "Australia"],
    validation: z.string().min(1, "Country is required"),
  },
  {
    label: "Profile Picture",
    name: "profilePicture",
    type: "file",
    validation: z.any(), // Custom validation can be added
  },
  {
    label: "Comments",
    name: "comments",
    type: "textarea",
    placeholder: "Enter your comments",
    validation: z.string().optional(),
  },
];

// Create Zod schema from formConfig
const createSchema = (config) => {
  const schema = {};
  config.forEach((field) => {
    schema[field.name] = field.validation;
  });
  return z.object(schema);
};

const schema = createSchema(formConfig);

const DynamicForm = ({ config }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      interests: [], // Ensure interests is initialized as an empty array
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "password":
      case "date":
      case "file":
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <Controller
              name={field.name}
              control={control}
              render={({ field: inputField }) => (
                <Input
                  {...inputField}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              )}
            />
            {errors[field.name] && <span>{errors[field.name]?.message}</span>}
          </div>
        );
      case "textarea":
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <Controller
              name={field.name}
              control={control}
              render={({ field: inputField }) => (
                <textarea {...inputField} placeholder={field.placeholder} />
              )}
            />
            {errors[field.name] && <span>{errors[field.name]?.message}</span>}
          </div>
        );
      case "select":
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <Controller
              name={field.name}
              control={control}
              render={({ field: inputField }) => (
                <select {...inputField}>
                  <option value="">Select</option>
                  {field.options &&
                    field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              )}
            />
            {errors[field.name] && <span>{errors[field.name]?.message}</span>}
          </div>
        );
      case "radio":
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <Controller
              name={field.name}
              control={control}
              render={({ field: inputField }) => (
                <>
                  {field.options &&
                    field.options.map((option) => (
                      <label key={option}>
                        <input
                          {...inputField}
                          type="radio"
                          value={option}
                          checked={inputField.value === option}
                        />
                        {option}
                      </label>
                    ))}
                </>
              )}
            />
            {errors[field.name] && <span>{errors[field.name]?.message}</span>}
          </div>
        );
      case "checkbox":
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <Controller
              name={field.name}
              control={control}
              render={({ field: inputField }) => (
                <>
                  {field.options &&
                    field.options.map((option) => (
                      <label key={option}>
                        <input
                          type="checkbox"
                          value={option}
                          checked={inputField.value.includes(option)}
                          onChange={() => {
                            const newValue = inputField.value.includes(option)
                              ? inputField.value.filter(
                                  (value) => value !== option
                                )
                              : [...inputField.value, option];
                            inputField.onChange(newValue);
                          }}
                        />
                        {option}
                      </label>
                    ))}
                </>
              )}
            />
            {errors[field.name] && <span>{errors[field.name]?.message}</span>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {config.map((field) => renderField(field))}
      <button type="submit">Submit</button>
    </form>
  );
};

const UsedCarForm = () => {
  return (
    <div>
      <h1>Dynamic Form with Validation</h1>
      <DynamicForm config={formConfig} />
    </div>
  );
};

export default UsedCarForm;
