import { MdDelete } from 'react-icons/md';
import { IconButton } from '../../../Packages';
import swal from 'sweetalert';
import { Delete } from '../../../API/Request_Format';
import { SectionDeleteRequest } from '../../../API/Server_Request/Section_Request';
import { InstructorDeleteRequest } from '../../../API/Server_Request/Instructor_Request';
import { BatchDeleteRequest } from '../../../API/Server_Request/Batch_Request';
import useMain from '../../../Context/Main/MainContext';
import { useToast } from '@chakra-ui/react';
const DeleteData = ({ id, Type, setFetch }) => {
  const { setChangesSection, setChangesInstructor } = useMain();
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

      const InstructorDelete = async () => {
        const result = await InstructorDeleteRequest({
          params: { id: id },
        });

        if (result.status == 200) {
          setChangesInstructor(true);

          success();
        }
      };

      const sectionDelete = async () => {
        const result = await SectionDeleteRequest({
          url: 'section',
          params: { id: id },
        });

        if (result.status == 200) {
          setChangesSection(true);

          success();
        }
      };

      const BatchDelete = async () => {
        const result = await BatchDeleteRequest({
          url: 'batch',
          params: { id: id },
        });
        if (result.status == 200) {
          setChangesInstructor(true);

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
          InstructorDelete();
          break;

        case 'Section':
          sectionDelete();
          break;

        case 'Batch':
          BatchDelete();
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
