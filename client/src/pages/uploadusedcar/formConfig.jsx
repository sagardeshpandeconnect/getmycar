import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
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
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
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
      z.number().min(1, "Km must be a positive number")
    ),
  },
  {
    label: "Picture",
    name: "picture",
    type: "file",
    validation: z.any().optional(),
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
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      price: "",
      brand: "",
      state: "",
      year: "",
      month: "",
      ownerType: "",
      kmDriven: "",
      picture: "", // Initialize picture with null
      comments: "",
    },
  });

  const [stateOptions, setStateOptions] = useState([]);
  const [file, setFile] = useState(""); // State for the file
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal control
  const { user } = useAuth0();
  // console.log(user.sub);

  const brand = watch("brand");

  useEffect(() => {
    if (brand) {
      setStateOptions(data.brands[brand]);
      setValue("state", "");
    }
  }, [brand, setValue]);

  const onSubmit = async (formData) => {
    try {
      let pictureUrl = "";

      if (file) {
        // Create a form data object to upload the image to Cloudinary
        const imageData = new FormData();
        imageData.append("file", file);
        imageData.append("upload_preset", "xr8rojkd"); // Replace with your Cloudinary upload preset
        imageData.append("cloud_name", "dbrbokt4s"); // Replace with your Cloudinary upload preset

        // Upload image to Cloudinary
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dbrbokt4s/image/upload", // Replace with your Cloudinary cloud name
          imageData
        );
        console.log(formData);

        if (response.status === 200) {
          pictureUrl = response.data.secure_url;
        } else {
          throw new Error("Failed to upload image");
        }
      }

      // Add picture URL to the form data
      formData.picture = pictureUrl;
      formData.userId = user.sub;
      // Send the form data to your server
      const serverResponse = await axios.post(
        "http://localhost:3001/usedcars/submit-form",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(serverResponse.data);

      onOpen();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => {
    window.location.reload();
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "tel":
      case "number":
      case "date":
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
      case "file":
        return (
          <Box key={field.name} mb={4}>
            <FormControl isInvalid={errors[field.name]}>
              <FormLabel>{field.label}</FormLabel>
              <Center>
                <Controller
                  name={field.name}
                  control={control}
                  render={({ field: inputField }) => (
                    <Input
                      // {...inputField}
                      type="file"
                      placeholder={field.placeholder}
                      onChange={(e) => {
                        setFile(e.target.files[0]); // Set the file state
                        // setValue("picture", e.target.files[0]); // Set form value for picture
                        console.log(e);
                      }}
                    />
                  )}
                />
              </Center>
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

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form Submission</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Form submitted successfully!</ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
