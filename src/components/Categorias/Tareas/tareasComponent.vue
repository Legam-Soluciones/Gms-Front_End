<template>
  <v-container>
    <template>
      <v-container fluid>
        <v-data-iterator
          :items="items"
          :items-per-page.sync="itemsPerPage"
          hide-default-footer
        >
          <template v-slot:header>
            <v-toolbar class="mb-2" src="@/assets/img12.jpg" dark flat>
              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
              <v-toolbar-title> Lista de Tareas </v-toolbar-title>
            </v-toolbar>
          </template>

          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.name"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <v-card>
                  <v-card-title class="subheading font-weight-bold">
                    {{ item.name }}
                  </v-card-title>

                  <v-divider></v-divider>

                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>tarea:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.tarea }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Fat:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.fat }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Carbs:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.carbs }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Protein:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.protein }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Sodium:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.sodium }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Calcium:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.calcium }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Iron:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.iron }}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </template>

          <template v-slot:footer>
            <v-toolbar class="mt-2" src="@/assets/img12.jpg" dark flat>
              <v-toolbar-title class="subheading">
                - Más Salud Slim Clinic -
              </v-toolbar-title>
            </v-toolbar>
          </template>
        </v-data-iterator>
      </v-container>
    </template>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    itemsPerPage: 4,
    items: [
      {
        name: "Por realizar"
      },
      {
        name: "En progreso"
      },
      {
        name: "Finalizadas"
      },
      {
        name: "Otras"
      }
    ]
  })
};
</script>
