import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { postData } from "@services/apiClient";

const usedCarSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile must be 10 digits"),
  price: z.number().min(1, "Price must be greater than zero"),
  brand: z.enum(["Toyota", "Honda", "Ford", "BMW", "Other"]),
  year: z.number().min(2000).max(new Date().getFullYear(), "Invalid year"),
  month: z.enum([
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
  ]),
  ownerType: z.enum(["First", "Second", "Third"]),
  kmDriven: z.number().min(0, "Kilometers driven must be non-negative"),
  picture: z
    .object({
      name: z.string(),
      url: z.string().url("Invalid picture URL"),
    })
    .optional(),
  comments: z.string().optional(),
});

const UsedCarForm = () => {
  const [pictureFile, setPictureFile] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(usedCarSchema),
    defaultValues: {
      brand: "Toyota",
      year: new Date().getFullYear(),
      month: "January",
      ownerType: "First",
    },
  });

  // console.log(import.meta.env.VITE_APP_CLOUDINARY_URL);

  const handlePictureChange = async (e) => {
    const file = e.target.files[0];
    setPictureFile(file);

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", import.meta.env.VITE_APP_UPLOAD_PRESET);

      try {
        const response = await fetch(import.meta.env.VITE_APP_CLOUDINARY_URL, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        console.log("Cloudinary upload result:", result);

        setValue("picture", {
          name: file.name,
          url: result.secure_url,
        });
      } catch (error) {
        console.error("Cloudinary upload failed:", error);
      }
    }
  };

  const onSubmit = async (data) => {
    console.log("Form data:", data);

    const response = await postData(`/usedcars/upload`, data);
    console.log(response);
    if (response.success) {
      toast({
        title: "Used car data upload successful!",
        status: "success",
        duration: 2500,
      });
    } else {
      setError(
        response.message || "Used car upload data failed. Please try again."
      );
    }
  };

  return (
    <Box
      maxWidth="500px"
      mx="auto"
      mt={5}
      p={5}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <form
        onSubmit={handleSubmit((data) => {
          // Convert year and kmDriven to numbers before submitting
          data.price = Number(data.price);
          data.year = Number(data.year);
          data.kmDriven = Number(data.kmDriven);
          onSubmit(data);
        })}
      >
        <VStack spacing={4} align="stretch">
          {/* Name */}
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Name</FormLabel>
            <Input {...register("name")} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          {/* Email */}
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          {/* Mobile */}
          <FormControl isInvalid={!!errors.mobile}>
            <FormLabel>Mobile</FormLabel>
            <Input {...register("mobile")} />
            <FormErrorMessage>{errors.mobile?.message}</FormErrorMessage>
          </FormControl>

          {/* Price */}
          <FormControl isInvalid={!!errors.price}>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              {...register("price")}
              onChange={(e) => setValue("price", Number(e.target.value))}
            />
            <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
          </FormControl>

          {/* Brand */}
          <FormControl isInvalid={!!errors.brand}>
            <FormLabel>Brand</FormLabel>
            <Select {...register("brand")}>
              {["Toyota", "Honda", "Ford", "BMW", "Other"].map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.brand?.message}</FormErrorMessage>
          </FormControl>

          {/* Year */}
          <FormControl isInvalid={!!errors.year}>
            <FormLabel>Year</FormLabel>
            <Select
              {...register("year")}
              onChange={(e) => setValue("year", Number(e.target.value))}
            >
              {Array.from(
                { length: new Date().getFullYear() - 1999 },
                (_, i) => (
                  <option key={2000 + i} value={2000 + i}>
                    {2000 + i}
                  </option>
                )
              )}
            </Select>
            <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
          </FormControl>

          {/* Month */}
          <FormControl isInvalid={!!errors.month}>
            <FormLabel>Month</FormLabel>
            <Select {...register("month")}>
              {[
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
              ].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.month?.message}</FormErrorMessage>
          </FormControl>

          {/* Owner Type */}
          <FormControl isInvalid={!!errors.ownerType}>
            <FormLabel>Owner Type</FormLabel>
            <RadioGroup defaultValue="First">
              <VStack align="start">
                {["First", "Second", "Third"].map((type) => (
                  <Radio key={type} value={type} {...register("ownerType")}>
                    {type}
                  </Radio>
                ))}
              </VStack>
            </RadioGroup>
            <FormErrorMessage>{errors.ownerType?.message}</FormErrorMessage>
          </FormControl>

          {/* Kilometers Driven */}
          <FormControl isInvalid={!!errors.kmDriven}>
            <FormLabel>Kilometers Driven</FormLabel>
            <Input
              type="number"
              {...register("kmDriven")}
              onChange={(e) => setValue("kmDriven", Number(e.target.value))}
            />
            <FormErrorMessage>{errors.kmDriven?.message}</FormErrorMessage>
          </FormControl>

          {/* Picture */}
          <FormControl isInvalid={!!errors.picture}>
            <FormLabel>Picture</FormLabel>
            <Input type="file" onChange={handlePictureChange} />
            <FormErrorMessage>{errors.picture?.message}</FormErrorMessage>
          </FormControl>

          {/* Comments */}
          <FormControl>
            <FormLabel>Comments</FormLabel>
            <Textarea {...register("comments")} />
          </FormControl>

          {/* Submit Button */}
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default UsedCarForm;
