export const createProject = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      //authorFirstName: profile.firstName,
      //authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};

export const createLocation = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('ubicaciones').add({
      ...project,
      //authorFirstName: profile.firstName,
      //authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};

export const createPersonal = (project) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('PersonalDaily').add({
      RUT: project.RUT,
      Nombre:project.Nombre,
      Genero: project.Genero,
      Cargo: project.Cargo,
      Categoria: project.Categoria,
      Jornada: project.Jornada,
      Turno_personal: project.Turno_personal,
      Estado_personal: project.Estado_personal,
      Area_trabajo: project.Area_trabajo,
      Horas_trabajadas: project.Horas_trabajadas,

      //authorFirstName: profile.firstName,
      //authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};

export const deleteUbicacion = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
      firestore.collection('ubicaciones').doc(project.id).delete().then(() => {
        dispatch({ type: 'DELETE_PROJECT_SUCCESS' });
      }).catch(err => {
      dispatch({ type: 'DELETE_PROJECT_ERROR' }, err);
    });
  }
};
