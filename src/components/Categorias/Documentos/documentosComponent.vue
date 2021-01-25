<!-- La sección de documentos es donde se muestran archivos de consentimiento o devuelta de IVA de la Clínica.
Estos archivos se muestran dependiendo de la elección del usuario en la tabla y todos ellos deben de ser capaces de
llenar datos y posteriormente guardarlos en la base de datos. 
 -->
<template>
  <v-row>
    <v-col cols="4">
      <v-hover v-slot:default="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="auto"
          max-width="500"
        >
          <!-- En este v-card se encuentran la lista de documentos y los cambios que se hacen con cada click
             Elegirdocumento cambia el texto del documento, y el registro es la información que se llena para el
             documento. Algunos ocupan siempre la misma información, por lo que a veces el número se repite.
              -->
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <h3>Documentos</h3>
            <br />
            <v-divider></v-divider>
            <v-card class="mx-auto" max-width="500" tile>
              <v-list flat>
                <v-list-item-group v-model="item" color="primary">
                  <v-list-item @click="(registro = 1), (elegirdocumento = 1)">
                    <v-list-item-icon>
                      <v-icon>insert_drive_file</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Consentimiento Informado
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="(registro = 2), (elegirdocumento = 2)">
                    <v-list-item-icon>
                      <v-icon>insert_drive_file</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Consentimiento Informado 2
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="(registro = 3), (elegirdocumento = 3)">
                    <v-list-item-icon>
                      <v-icon>insert_drive_file</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Consentimiento Informado Mesoterapia
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="(registro = 4), (elegirdocumento = 4)">
                    <v-list-item-icon>
                      <v-icon>insert_drive_file</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Justificante Médico
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="(registro = 3), (elegirdocumento = 5)">
                    <v-list-item-icon>
                      <v-icon>insert_drive_file</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Consentimiento informado PRP capilar
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="(registro = 6), (elegirdocumento = 6)">
                    <v-list-item-icon>
                      <v-icon>insert_drive_file</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Reintegro de IVA
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="(registro = 3), (elegirdocumento = 7)">
                    <v-list-item-icon>
                      <v-icon>insert_drive_file</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Consentimiento PRP facial
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="(registro = 3), (elegirdocumento = 8)">
                    <v-list-item-icon>
                      <v-icon>insert_drive_file</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Consentimiento informado disminución de estrías
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="(registro = 3), (elegirdocumento = 9)">
                    <v-list-item-icon>
                      <v-icon>insert_drive_file</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Consentimiento informado Uvuloplastia
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
            <!-- Aquí es donde se llenara la información del usuario dependiendo del registro que este siendo mostrado en ese
            momento. -->
            <div v-if="registro == 1">
              <v-text-field v-model="Ubicacion" type="text" label="Lugar">
              </v-text-field>
              <v-text-field v-model="Suscrito" type="text" label="Suscrito">
              </v-text-field>
              <v-text-field
                v-model="Nombre"
                type="text"
                label="Nombre completo del paciente"
              >
              </v-text-field>
              <v-text-field
                v-model="Procedimiento"
                type="text"
                label="Procedimiento a realizar"
              >
              </v-text-field>
              <v-text-field
                v-model="Profesional"
                type="text"
                label="Nombre completo del profesional"
              >
              </v-text-field>
              <v-text-field
                v-model="Riesgos"
                type="text"
                label="Riesgos del procedimiento"
              >
              </v-text-field>
              <v-text-field
                v-model="Beneficios"
                type="text"
                label="Beneficios del procedimiento."
              >
              </v-text-field>
            </div>
            <div v-if="registro == 2">
              <v-text-field v-model="Ubicacion" type="text" label="Lugar">
              </v-text-field>
              <v-text-field
                v-model="Nombre"
                type="text"
                label="Nombre completo del paciente"
              >
              </v-text-field>
              <v-text-field
                v-model="Identificacion"
                type="text"
                label="Numero de Identificación"
              >
              </v-text-field>
              <v-text-field
                v-model="Procedimiento"
                type="text"
                label="Procedimiento a realizar"
              >
              </v-text-field>
              <v-text-field
                v-model="Profesional"
                type="text"
                label="Nombre completo del profesional"
              >
              </v-text-field>
              <v-text-field
                v-model="CodigoProfesional"
                type="text"
                label="Codigo del profesional"
              >
              </v-text-field>
            </div>
            <div v-if="registro == 3">
              <v-text-field v-model="Ubicacion" type="text" label="Lugar">
              </v-text-field>
              <v-text-field
                v-model="Nombre"
                type="text"
                label="Nombre completo del paciente"
              >
              </v-text-field>
              <v-text-field
                v-model="Profesional"
                type="text"
                label="Nombre completo del profesional"
              >
              </v-text-field>
            </div>
            <div v-if="registro == 4">
              <v-text-field v-model="Ubicacion" type="text" label="Lugar">
              </v-text-field>
              <v-text-field
                v-model="Nombre"
                type="text"
                label="Nombre completo del paciente"
              >
              </v-text-field>
              <v-text-field
                v-model="Identificacion"
                type="text"
                label="Numero de Identificación"
              >
              </v-text-field>
              <v-text-field
                v-model="Profesional"
                type="text"
                label="Nombre completo del profesional"
              >
              </v-text-field>
              <v-text-field
                v-model="CodigoProfesional"
                type="text"
                label="Codigo del profesional"
              >
              </v-text-field>
              <v-text-field
                v-model="HEntrada"
                type="text"
                label="Hora de Entrada"
              >
              </v-text-field>
              <v-text-field
                v-model="HSalida"
                type="text"
                label="Hora de Salida"
              >
              </v-text-field>
            </div>
            <div v-if="registro == 6">
              <v-text-field
                v-model="Nombre"
                type="text"
                label="Nombre completo del paciente"
              >
              </v-text-field>
              <v-text-field
                v-model="Identificacion"
                type="text"
                label="Numero de Identificación"
              >
              </v-text-field>
              <v-text-field v-model="Autovocher" type="text" label="Autovocher">
              </v-text-field>
              <v-text-field
                v-model="Datafonoutilizado"
                type="text"
                label="Datáfono utilizado"
              >
              </v-text-field>
              <v-text-field v-model="Impuesto" type="text" label="IVA">
              </v-text-field>
              <v-text-field v-model="Moneda" type="text" label="Moneda">
              </v-text-field>
              <v-text-field v-model="Recibido" type="text" label="Recibido">
              </v-text-field>
              <v-text-field v-model="Voucher" type="text" label="Voucher">
              </v-text-field>
              <v-text-field v-model="Datafono" type="text" label="Datáfono">
              </v-text-field>
            </div>
            <!-- La primera función, addData simplemente pasa el contenido en los registros y lo muestra en el documento  -->
            <v-btn @click="addData()">
              Llenar Datos
            </v-btn>
            <!-- La función addDocumento guarda los datos llenados en el registro a la base de datos. -->
            <v-btn @click="addDocumento()">
              Guardar Datos
            </v-btn>
            <!-- Esta función es especial, fue hecha para comprobar que la firma se guardara de manera correcta. -->
            <v-btn @click="verdatos()">
              Ver datos
            </v-btn>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="2"></v-col>

    <v-col>
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="auto"
          max-width="auto"
          v-for="Documento in Documentos"
          :key="Documento.id"
        >
          <!-- Aquí es donde se cambiara el texto mostrado dependiendo del documento en el que se esté trabajando. -->
          <div class="ml-4 mr-4" v-if="elegirdocumento == 1">
            <div class="d-flex justify-center">
              <v-img
                src="@/assets/LogoM.png"
                max-height="400px"
                max-width="300px"
                justify-center
              ></v-img>
            </div>
            <p class="text-center">
              Consentimiento Informado <br />
              Fecha: {{ Documento.Fecha }} {{ Documento.Hora }}<br />
            </p>
            Lugar: {{ Documento.Lugar }} <br />
            <br />El suscrito (a) {{ Documento.Suscrito }} en mi condición de
            usuario, padre o madre, tutor, apoderado legal de:
            {{ Documento.NombreCompleto }}, doy mi consentimiento informado para
            que: Se practique por parte del personal autorizado del centro de
            salud, el procedimiento o programa que a continuación se detalla:
            {{ Documento.Procedimiento }} <br /><br />

            Por tanto hago constar que de previo a la firma de este
            consentimiento informado, se han cumplido las siguientes
            condiciones: <br />
            <br />
            1. Recibí información sencilla y completa por parte de
            {{ Documento.Profesional }}, quien manifiesta ser funcionario
            calificado del centro de salud. En esta, se me proporciono
            información suficiente y comprensible sobre los beneficios y riesgos
            relacionados con las actividades consentidas, los cuales son: <br />
            <br />

            Riesgos: {{ Documento.Riesgos }} <br />
            <br />
            Beneficios: {{ Documento.Beneficios }}<br />
            <br />
            2. Se me ha leído y explicado en forma completa el contenido de este
            documento, aclarando a la vez, todas mis dudas a satisfacción.
            <br />
            <br />
            Aclaro, eso si, que durante mi atención podre cambiar de opinión y
            cancelar la presente autorización, de lo cual se dejara constancia
            escrita en el expediente, sin que ello signifique que se me negara
            los restantes servicios de salud. <br /><br />
          </div>
          <div class="ml-4 mr-4" v-if="elegirdocumento == 2">
            <div class="d-flex justify-center">
              <v-img
                src="@/assets/LogoM.png"
                max-height="400px"
                max-width="300px"
                justify-center
              ></v-img>
            </div>
            <p class="text-center">
              Consentimiento Informado <br />
              Fecha: {{ Documento.Fecha }} {{ Documento.Hora }}<br />
            </p>
            Lugar: {{ Documento.Lugar }} <br />
            <br />{{ Documento.NombreCompleto }} cédula
            {{ Documento.Identificacion }}, he sido valorado por el Dr.:
            {{ Documento.Profesional }}, código profesional
            {{ Documento.CodigoProfesional }} quien es mi médico tratante y me
            ha informado acerca de mi enfermedad y/o padecimiento y el
            tratamiento de la misma. <br />
            <br />
            He sido informado sobre el procedimiento a realizar, los riesgos y
            beneficios que voy a obtener, así como las indicaciones
            postoperatorias a seguir, me he enterado de las consecuencias en
            caso de no recibir el tratamiento. <br />
            <br />
            He realizado las preguntas necesarias y el médico me ha dado
            respuestas comprensibles, por lo tanto doy mi consentimiento para:
            {{ Documento.Procedimiento }}
          </div>

          <div class="ml-4 mr-4" v-if="elegirdocumento == 3">
            <div class="d-flex justify-center">
              <v-img
                src="@/assets/LogoM.png"
                max-height="400px"
                max-width="300px"
                justify-center
              ></v-img>
            </div>
            <p class="text-center">
              Consentimiento Informado <br />
              Fecha: {{ Documento.Fecha }} {{ Documento.Hora }}<br />
            </p>
            Lugar: {{ Documento.Lugar }} <br />
            <br />El suscrito (a) {{ Documento.NombreCompleto }}, en mi
            condición de usuario, doy mi consentimiento informado para que se
            practique por parte del personal autorizado del centro de salud, el
            procedimiento de mesoterapia. <br />
            <br />

            Por tanto hago constar que de previo a la firma de este
            consentimiento informado, se han cumplido las siguientes
            condiciones: <br />
            <br />

            1. Recibí información sencilla y completa por parte de un
            funcionario calificado del centro de salud. En esta, se me
            proporciono información suficiente y comprensible sobre los
            beneficios y riesgos relacionados con las actividades consentidas,
            los cuales son: <br />
            <br />

            Riesgos: edema, sangrado, hematomas varios en la zona de aplicación.
            <br />
            <br />

            Beneficios: disminución de mm a cm en el área de la aplicación,
            disminución de piel naranja y leve tonificación. <br />
            <br />

            2. Se me ha leído y explicado en forma completa el contenido de este
            documento, aclarando a la vez, todas mis dudas a satisfacción.
            <br />
            <br />
            Aclaro, eso si, que durante mi atención podré cambiar de opinión y
            cancelar la presente autorización, de lo cual se dejara constancia
            escrita en el expediente, sin que ello signifique que se me negara
            los restantes servicios de salud.
          </div>

          <div class="ml-4 mr-4" v-if="elegirdocumento == 4">
            <div class="d-flex justify-center">
              <v-img
                src="@/assets/LogoM.png"
                max-height="400px"
                max-width="300px"
                justify-center
              ></v-img>
            </div>
            <p class="text-center">
              Justificante Médico <br />
              Fecha: {{ Documento.Fecha }} {{ Documento.Hora }}<br />
            </p>
            Dr (a): {{ Documento.Profesional }} <br />
            <br />
            Código: {{ Documento.CodigoProfesional }} <br />
            <br />
            <br />
            La presente es para saludarle, y a la vez comunicarle que el día de
            hoy el (la) señor (a) {{ Documento.NombreCompleto }} con cédula de
            identidad número {{ Documento.Identificacion }} se presentó a la
            consulta médica a las {{ Documento.HoradeEntrada }} hrs y se retiro
            a las {{ Documento.HoradeSalida }} hrs. <br />
            <br />
            El paciente fue dado de alta, sin embargo, se le recomienda guardar
            reposo por el resto del día. <br /><br />
            Sírvase el interesado hacer uso del presente para los fines que más
            le convengan. Agradeciendo la atención brindada y ayuda brindada a
            la paciente, se despide. <br /><br />
            Atentamente:
          </div>

          <div class="ml-4 mr-4" v-if="elegirdocumento == 5">
            <div class="d-flex justify-center">
              <v-img
                src="@/assets/LogoM.png"
                max-height="400px"
                max-width="300px"
                justify-center
              ></v-img>
            </div>
            <p class="text-center">
              Consentimiento informado PRP capilar <br />
              Fecha: {{ Documento.Fecha }} {{ Documento.Hora }}<br />
            </p>
            Lugar: {{ Documento.Lugar }} <br />
            <br />
            El suscrito (a) {{ Documento.NombreCompleto }}, en mi condición de
            usuario, doy mi consentimiento informado para que se practique por
            parte del personal autorizado del centro de salud, el procedimiento
            de Plasma rico en plaquetas capilar. <br />
            <br />
            Por tanto hago constar que de previo a la firma de este
            consentimiento informado, se han cumplido las siguentes condiciones:
            <br /><br />
            1. Recibí información sencilla y completa por parte de un
            funcionario calificado del centro de salud. En esta, se me
            proporciono información suficiente y comprensible sobre los
            beneficios y riesgos relacionados con las actividades consentidas,
            los cuales son: <br /><br />
            Riesgos: edema, sangrado, dolor. <br /><br />
            Beneficios: disminución de la caída del cabello, engrosamiento del
            folículo piloso, aceleración de la fase anágena del cabello.
            <br /><br />
            2. Se me ha leído y explicado en forma completa el contenido de este
            documento, aclarando a la vez, todas mis dudas a satisfacción.
            <br />
            <br />
            Aclaro, eso si, que durante mi atención podré cambiar de opinión y
            cancelar la presente autorización, de lo cuál se dejara constancia
            escrita en el expediente, sin que ello signifique que se me negara
            los restantes servicios de salud.
          </div>

          <div class="ml-4 mr-4" v-if="elegirdocumento == 6">
            <div class="d-flex justify-center">
              <v-img
                src="@/assets/LogoM.png"
                max-height="400px"
                max-width="300px"
                justify-center
              ></v-img>
            </div>
            <br />
            Fecha: {{ Documento.Fecha }} {{ Documento.Hora }}<br />
            Cliente: {{ Documento.NombreCompleto }} <br />
            Cédula: {{ Documento.Identificacion }} <br />
            Auto Voucher: {{ Documento.Autovocher }} <br />
            Datáfono utilizado: {{ Documento.Datafonoutilizado }} <br />
            Monto IVA: {{ Documento.Impuesto }} <br />
            Moneda: {{ Documento.Moneda }} <br />
            <br />
            Yo, {{ Documento.NombreCompleto }}, portador de la cédula de
            identidad número {{ Documento.Identificacion }}, hago constar que he
            recibido la suma de {{ Documento.Recibido }} por concepto de
            reintrego del IVA según lo indica la ley, esto por cancelar mi
            servicio médico con tarjeta de crédito u débido, la autorización de
            mi vaucher es la número {{ Documento.Voucher }} y este fue incluido
            en el cierre de datáfono del {{ Documento.Datafono }} de este mismo
            día.
          </div>

          <div class="ml-4 mr-4" v-if="elegirdocumento == 7">
            <div class="d-flex justify-center">
              <v-img
                src="@/assets/LogoM.png"
                max-height="400px"
                max-width="300px"
                justify-center
              ></v-img>
            </div>
            <p class="text-center">
              Consentimiento PRP facial <br />
              Fecha: {{ Documento.Fecha }} {{ Documento.Hora }}<br />
            </p>
            Lugar: {{ Documento.Lugar }} <br />
            <br />
            El suscrito (a) {{ Documento.NombreCompleto }}, en mi condición de
            usuario, doy mi consentimiento informado para que se practique por
            parte del personal autoirzado del centro de salud, el procedimiento
            de plasma rico en plaquetas en la zona facial. <br />
            <br />
            Por tanto hago constar que de previo a la firma de este
            consentimiento informado, se han cumplido las siguentes condiciones:
            <br /><br />
            1. Recibí información sencilla y completa por parte de un
            funcionario calificado del centro de salud. En esta, se me
            proporciono información suficiente y comprensible sobre los
            beneficios y riesgos relacionados con las actividades consentidas,
            los cuales son: <br /><br />
            Riesgos: edema, eritema y hematomas varios. <br /><br />
            Beneficios: hidratación, estimulación de las células del rostro para
            producción de colágeno, tensión facial y disminución de líneas de
            expresión dinámicas. <br /><br />
            2. Se me ha leído y explicado en forma completa el contenido de este
            documento, aclarando a la vez, todas mis dudas a satisfacción.
            <br />
            <br />
            Aclaro, eso si, que durante mi atención podré cambiar de opinión y
            cancelar la presente autorización, de lo cuál se dejara constancia
            escrita en el expediente, sin que ello signifique que se me negara
            los restantes servicios de salud.
          </div>
          <div class="ml-4 mr-4" v-if="elegirdocumento == 8">
            <div class="d-flex justify-center">
              <v-img
                src="@/assets/LogoM.png"
                max-height="400px"
                max-width="300px"
                justify-center
              ></v-img>
            </div>
            <p class="text-center">
              Consentimiento informado disminución de estrías <br />
              Fecha: {{ Documento.Fecha }} {{ Documento.Hora }}<br />
            </p>
            Lugar: {{ Documento.Lugar }} <br />
            <br />
            El suscrito (a) {{ Documento.NombreCompleto }}, en mi condición de
            usuario, doy mi consentimiento informado para que se practique por
            parte del personal autoirzado del centro de salud, el procedimiento
            de disminución de estrías con plasma pen y dermapen. <br />
            <br />
            Por tanto hago constar que de previo a la firma de este
            consentimiento informado, se han cumplido las siguentes condiciones:
            <br /><br />
            1. Recibí información sencilla y completa por parte de un
            funcionario calificado del centro de salud. En esta, se me
            proporciono información suficiente y comprensible sobre los
            beneficios y riesgos relacionados con las actividades consentidas,
            los cuales son: <br /><br />
            Riesgos: edema, sangrado, hematomas varios en la zona de aplicación.
            <br /><br />
            Beneficios: disminución del tamñao y tonalidad de las estrías en
            tratamiento. <br /><br />
            2. Se me ha leído y explicado en forma completa el contenido de este
            documento, aclarando a la vez, todas mis dudas a satisfacción.
            <br />
            <br />
            Aclaro, eso si, que durante mi atención podré cambiar de opinión y
            cancelar la presente autorización, de lo cuál se dejara constancia
            escrita en el expediente, sin que ello signifique que se me negara
            los restantes servicios de salud.
          </div>

          <div class="ml-4 mr-4" v-if="elegirdocumento == 9">
            <div class="d-flex justify-center">
              <v-img
                src="@/assets/LogoM.png"
                max-height="400px"
                max-width="300px"
                justify-center
              ></v-img>
            </div>
            <p class="text-center">
              Consentimiento informado disminución de estrías <br />
              Fecha: {{ Documento.Fecha }} {{ Documento.Hora }} <br />
            </p>
            Lugar: {{ Documento.Lugar }} <br />
            <br />
            El suscrito (a) {{ Documento.NombreCompleto }}, en mi condición de
            usuario, doy mi consentimiento informado para que se practique por
            parte del personal autoirzado del centro de salud, el procedimiento
            de Uvuloplastía. <br />
            <br />
            Por tanto hago constar que de previo a la firma de este
            consentimiento informado, se han cumplido las siguentes condiciones:
            <br /><br />
            1. Recibí información sencilla y completa por parte de un
            funcionario calificado del centro de salud. En esta, se me
            proporciono información suficiente y comprensible sobre los
            beneficios y riesgos relacionados con las actividades consentidas,
            los cuales son: <br /><br />
            Riesgos: edema orofaringeo, infección, sangrado, dolor. <br /><br />
            Beneficios: apertura de la vía aérea superior, disminución de
            ronquidos, disminución de la apnea obstructiva del sueño.
            <br /><br />
            2. Se me ha leído y explicado en forma completa el contenido de este
            documento, aclarando a la vez, todas mis dudas a satisfacción.
            <br />
            <br />
            Aclaro, eso si, que durante mi atención podré cambiar de opinión y
            cancelar la presente autorización, de lo cuál se dejara constancia
            escrita en el expediente, sin que ello signifique que se me negara
            los restantes servicios de salud.
          </div>
          <div>
            <img v-bind:src="Documento.Firma" />
            <img v-bind:src="Documento.Firma2" />
          </div>
        </v-card>
      </v-hover>
      <v-col>
        <!-- Esta parte de aquí es la correspondiente a la firma. El componente llamado VueSignaturaPad es el que permite hacer la firma
        Se necesitan la firma del cliente y del profesional, y se guarda en la base de datos como un archivo en base64
         -->
        <v-card>
          <div>
            Firma del Profesional:
            <VueSignaturePad width="500px" height="500px" ref="signaturePad" />
            <div>
              <button @click="save()">Guardar Firma</button>
              <button @click="undo()">Deshacer</button>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
import { db } from "@/main.js";
export default {
  data: () => ({
    first: "",
    last: "",
    item: null,
    Ubicacion: null,
    Nombre: null,
    Suscrito: null,
    Procedimiento: null,
    Profesional: null,
    Riesgos: null,
    Beneficios: null,
    CodigoProfesional: null,
    registro: 1,
    elegirdocumento: 1,
    Identificacion: null,
    HEntrada: null,
    HSalida: null,
    Autovocher: null,
    Datafonoutilizado: null,
    Impuesto: null,
    Moneda: null,
    Recibido: null,
    Voucher: null,
    Datafono: null,
    name: "MySignaturePad",
    items: [
      { text: "CONSENTIMIENTO INFORMADO", icon: "insert_drive_file" },
      { text: "Consentimiento Informado", icon: "insert_drive_file" },
      {
        text: "Consentimiento informado mesoterapia",
        icon: "insert_drive_file"
      },
      { text: "Justificante Médico", icon: "insert_drive_file" },
      {
        text: "Consentimiento informado PRP capilar",
        icon: "insert_drive_file"
      },
      { text: "REINTEGRO DE IVA", icon: "insert_drive_file" },
      { text: "Consentimiento PRP facial", icon: "insert_drive_file" },
      {
        text: "Consentimiento informado disminución de estrías",
        icon: "insert_drive_file"
      },
      {
        text: "Consentimiento informado Uvuplastia",
        icon: "insert_drive_file"
      }
    ],
    Documentos: []
  }),
  created() {
    this.addData();
  },
  methods: {
    addData() {
      this.Documentos = [];
      const Offset = new Date().getTimezoneOffset();
      const Fecha = new Date().toLocaleDateString();
      const Hora = new Date().toLocaleTimeString();
      this.Documentos.push({
        Lugar: this.Ubicacion,
        Fecha: Fecha,
        Offset: Offset,
        Hora: Hora,
        Suscrito: this.Suscrito,
        NombreCompleto: this.Nombre,
        Procedimiento: this.Procedimiento,
        Identificacion: this.Identificacion,
        Profesional: this.Profesional,
        Riesgos: this.Riesgos,
        Beneficios: this.Beneficios,
        CodigoProfesional: this.CodigoProfesional,
        HoradeEntrada: this.HEntrada,
        HoradeSalida: this.HSalida,
        Autovocher: this.Autovocher,
        Datafonoutilizado: this.Datafonoutilizado,
        Impuesto: this.Impuesto,
        Moneda: this.Moneda,
        Recibido: this.Recibido,
        Voucher: this.Voucher,
        Datafono: this.Datafono
      });
    },
    //La parte comentada del método que añade los datos a la base es para poner en blanco los respectivos espacios posterior
    async addDocumento() {
      try {
        const { data } = this.$refs.signaturePad.saveSignature();
        await db.collection("Documentos").add({
          Lugar: this.Ubicacion,
          Fecha: new Date().toISOString().substr(0, 10),
          Hora: new Date().toISOString().substr(11, 5),
          Suscrito: this.Suscrito,
          NombreCompleto: this.Nombre,
          Procedimiento: this.Procedimiento,
          Profesional: this.Profesional,
          Riesgos: this.Riesgos,
          Beneficios: this.Beneficios,
          CodigoProfesional: this.CodigoProfesional,
          HoradeEntrada: this.HEntrada,
          HoradeSalida: this.HSalida,
          Firma: data
        });
        // this.Ubicacion = "";
        // this.Suscrito = "";
        // this.Nombre = "";
        // this.Procedimiento = "";
        // this.Profesional = "";
        // this.Riesgos = "";
        // this.Beneficios = "",
        // this.CodigoProfesional = "",
        // this.HoradeEntrada = "",
        // this.HoradeSalida = ""
      } catch (error) {
        console.log(error);
      }
    },
    // Esta es la función para ver los datos de los documentos. Pero principalmente es para ver la firma.
    verdatos() {
      this.Documentos = [];
      db.collection("Documentos").onSnapshot(res => {
        const changes = res.docChanges();
        changes.forEach(change => {
          if (change.type === "added") {
            this.Documentos.push({
              ...change.doc.data(),
              id: change.doc.id
            });
          }
        });
      });
    },
    //Estos dos métodos son de la parte de la Firma. Undo es la de deshacer y save es para mostrar los datos en la consola.
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
    }
  }
};
</script>
