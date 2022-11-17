import { Select, FormControl, FormLabel } from '@chakra-ui/react';

export const CustomSelection = ({ title, value, datas, setValue, mt }) => {
  return (
    <FormControl mt={mt}>
      <FormLabel fontSize={14}>{title}</FormLabel>
      <Select
        fontSize={14}
        // focusBorderColor={"red.400"}
        placeholder="- Please Select -"
        onChange={e => {
          setValue(e.target.value);
        }}
        required
        value={value}
      >
        {datas.map(data => {
          return (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelection;
