import { MdDelete } from 'react-icons/md';
import { IconButton } from '../../../Packages';
import swal from 'sweetalert';
import { Delete } from '../../../API/Request_Format';
import { useToast } from '@chakra-ui/react';
const DeleteData = ({ id, Type, setFetch }) => {
  const toast = useToast();
  //USE SWAL FOR DELETING , PARA BASIC

  const HandleDelete = () => {
    const success = () => {
      toast({
        title: 'Account Deleted.',
        description: 'User Account Deleted Successfully!',
        position: 'top',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    };

    //Delete
    const runDelete = async () => {
      //Delete Users only. Specifically Admin,Client and Instructor
      const userDelete = async () => {
        const result = await Delete({
          url: 'admin/user',
          params: { id: id },
        });

        if (result.status == 200) {
          setFetch(true);

          success();
        }
      };

      const sectionDelete = async () => {
        const result = await Delete({
          url: 'admin/section',
          params: { id: id },
        });

        if (result.status == 200) {
          setFetch(true);

          success();
        }
      };

      switch (Type) {
        case 'User':
          userDelete();
          break;
        case 'Client':
          userDelete();
          break;
        case 'Instructor':
          userDelete();
          break;

        case 'Section':
          sectionDelete();
          break;
      }
    };

    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover it!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        runDelete();
      }
    });
  };
  return (
    <>
      <IconButton color={'red.400'} onClick={HandleDelete}>
        <MdDelete />
      </IconButton>
    </>
  );
};

export default DeleteData;
