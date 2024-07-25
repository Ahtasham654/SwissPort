import React, {useState, FC, Dispatch, SetStateAction} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

interface DropDownData {
  label: string;
  value: string;
}

interface Props {
  data: DropDownData[];
  onSelect: Dispatch<SetStateAction<string | null>>;
  containerStyle?: ViewStyle;
  label?: string;
  isRequired: boolean;
  placeholder: string;
}

const CustomDropdown: FC<Props> = ({
  data,
  onSelect,
  containerStyle,
  label,
  placeholder,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const renderLabel = () => {
    if (onSelect !== undefined) {
      return (
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={[styles.label]}>{label}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? `${placeholder}` : '...'}
        // searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          if (onSelect !== undefined) {
            onSelect(item.label);
          }
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    padding: 0,
    marginTop: 20,
  },
  dropdown: {
    height: 50,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 5,
  },
  label: {
    // backgroundColor: 'white',
    left: 0,
    top: 0,
    zIndex: 999,
    paddingHorizontal: 0,
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#65656B',
  },
  selectedTextStyle: {
    fontSize: 12,
    color: 'red',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 10,
    color: 'black',
  },
});
