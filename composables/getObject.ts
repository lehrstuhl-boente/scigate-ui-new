// returns the object from object list that includes the subobject
export const getObject = <T>(objectList: T[], subObject: Object): T => {
  for (const object of objectList) {
    if (isSubObject(object, subObject)) return object;
  }
  throw Error('There exists no object with the given subobject.');
};

const isSubObject = (object: any, subObject: any) => {
  for (const key in subObject) {
    if (!object.hasOwnProperty(key)) return false;
    if (object[key] != subObject[key]) return false;
  }
  return true;
};
