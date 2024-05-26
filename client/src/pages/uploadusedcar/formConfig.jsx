import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  Radio,
  RadioGroup,
  Heading,
  Stack,
} from "@chakra-ui/react";

// Example data for cascading selects
const data = {
  brands: {
    USA: ["California", "Texas", "New York"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
    Australia: ["New South Wales", "Victoria", "Queensland"],
  },
};

// Generate year options for the past 20 years
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 20 }, (_, i) => currentYear - i);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formConfig = [
  {
    label: "Seller Name",
    name: "name",
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
    label: "Mobile Number",
    name: "mobile",
    type: "tel",
    placeholder: "Enter your mobile number",
    validation: z.string().min(10, "Mobile number must be at least 10 digits"),
  },
  {
    label: "Price",
    name: "price",
    type: "number",
    placeholder: "Enter the price",
    validation: z.preprocess(
      (val) => Number(val),
      z.number().min(1, "Price must be a positive number")
    ),
  },
  {
    label: "Brands",
    name: "brand",
    type: "select",
    options: Object.keys(data.brands),
    validation: z.string().min(1, "Brand is required"),
  },
  {
    label: "State",
    name: "state",
    type: "select",
    options: [],
    validation: z.string().min(1, "State is required"),
  },
  {
    label: "Year",
    name: "year",
    type: "select",
    options: years,
    validation: z.string().min(1, "Year is required"),
  },
  {
    label: "Month",
    name: "month",
    type: "select",
    options: months,
    validation: z.string().min(1, "Month is required"),
  },
  {
    label: "Owner Type",
    name: "ownerType",
    type: "radio",
    options: ["First Owner", "Second Owner", "Third Owner"],
    validation: z.string().min(1, "Owner Type is required"),
  },
  {
    label: "Number of Km Driven",
    name: "kmDriven",
    type: "number",
    placeholder: "Enter number of kilometers driven",
    validation: z.preprocess(
      (val) => Number(val),
      z.number().min(0, "Kilometers driven must be a non-negative number")
    ),
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
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [stateOptions, setStateOptions] = useState([]);

  const brand = watch("brand");

  useEffect(() => {
    if (brand) {
      setStateOptions(data.brands[brand]);
      setValue("state", "");
    }
  }, [brand, setValue]);

  const onSubmit = async (formData) => {
    // Convert price and kmDriven to numbers
    formData.price = Number(formData.price);
    formData.kmDriven = Number(formData.kmDriven);

    try {
      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "tel":
      case "number":
      case "date":
      case "file":
        return (
          <Box key={field.name} mb={4}>
            <FormControl isInvalid={errors[field.name]}>
              <FormLabel>{field.label}</FormLabel>
              <Controller
                name={field.name}
                control={control}
                render={({ field: inputField }) => (
                  <Input
                    {...inputField}
                    type={field.type}
                    placeholder={field.placeholder}
                    min={field.min}
                    max={field.max}
                  />
                )}
              />
              <FormErrorMessage>{errors[field.name]?.message}</FormErrorMessage>
            </FormControl>
          </Box>
        );
      case "textarea":
        return (
          <Box key={field.name} mb={4}>
            <FormControl isInvalid={errors[field.name]}>
              <FormLabel>{field.label}</FormLabel>
              <Controller
                name={field.name}
                control={control}
                render={({ field: inputField }) => (
                  <Textarea {...inputField} placeholder={field.placeholder} />
                )}
              />
              <FormErrorMessage>{errors[field.name]?.message}</FormErrorMessage>
            </FormControl>
          </Box>
        );
      case "select":
        return (
          <Box key={field.name} mb={4}>
            <FormControl isInvalid={errors[field.name]}>
              <FormLabel>{field.label}</FormLabel>
              <Controller
                name={field.name}
                control={control}
                render={({ field: inputField }) => (
                  <Select {...inputField} placeholder="Select">
                    {field.name === "state"
                      ? stateOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))
                      : field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                  </Select>
                )}
              />
              <FormErrorMessage>{errors[field.name]?.message}</FormErrorMessage>
            </FormControl>
          </Box>
        );
      case "radio":
        return (
          <Box key={field.name} mb={4}>
            <FormControl isInvalid={errors[field.name]}>
              <FormLabel>{field.label}</FormLabel>
              <Controller
                name={field.name}
                control={control}
                render={({ field: inputField }) => (
                  <RadioGroup {...inputField}>
                    <Stack direction="row">
                      {field.options.map((option) => (
                        <Radio key={option} value={option}>
                          {option}
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                )}
              />
              <FormErrorMessage>{errors[field.name]?.message}</FormErrorMessage>
            </FormControl>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      p={4}
      boxShadow="md"
      borderRadius="md"
    >
      {config.map((field) => renderField(field))}
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  );
};

const UsedCarForm = () => {
  return (
    <Box
      maxW="lg"
      mx="auto"
      mt={10}
      p={5}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading mb={6} textAlign="center">
        Dynamic Form with Validation
      </Heading>
      <DynamicForm config={formConfig} />
    </Box>
  );
};

export default UsedCarForm;
