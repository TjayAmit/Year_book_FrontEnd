import { MdEdit } from 'react-icons/md';
import { IconButton } from '../../../Packages';
import Usermodal from '../../../Layouts/usermodal';

export const EditData = ({
  data,
  id,
  Type,
  setFetch,
  BtnSave,
  close,
  setClose,
  loading,
  setLoading,
  Update,
}) => {
  return (
    <>
      <Usermodal
        Update={Update}
        data={data}
        action={'update'}
        BtnOpen={
          <>
            <IconButton color={'green.400'} onClick={() => {}}>
              <MdEdit />
            </IconButton>
          </>
        }
        BtnSave={'Update ' + Type}
        close={close}
        setClose={setClose}
        Type={Type}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
};

export default EditData;
