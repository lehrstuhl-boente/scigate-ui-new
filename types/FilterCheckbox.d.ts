interface FilterCheckbox extends Filter {
  options: Option[];
}

interface Option {
  name: string;
  count: number;
  checked: boolean;
}
