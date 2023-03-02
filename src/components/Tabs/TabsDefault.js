import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataTabs from "../../data/TabsIconSection/tabs-default-data.json";

const TabsDefault = () => (
  <section>
    <div className="container">
      <div className="row mt-50">
        <div className="col-md-8 offset-md-2">
          <Tabs className="light-tabs">
            <TabList className="nav nav-tabs default-tabs">
              {dataTabs.map((tab) => (
                <Tab key={tab.id}>
                  <span>{tab.title}</span>
                </Tab>
              ))}
            </TabList>
            <div className="tab-content">
              {dataTabs.map((tab) => (
                <TabPanel key={tab.id} className="tab-pane show in active">
                  {tab.id === 1 && <p style={{ fontSize: '1.2rem', lineHeight: '30px' }}>
                    Contamos con un equipo de contadores altamente calificados y actualizados, quienes te podremos apoyar en la contabilidad de tu empresa, ya sea como persona fisica o como persona moral.
                    <br />
                    Contamos con los softwares contables mas completos y sofisticados que nos permitiran llevar la contabilidad de tunegocio de una manera correcta, eficiente  y asi hacer mas optima la toma de desiciones.
                    <br />
                    Dentro de los servicios contables ofrecemos:
                    <ul>
                      <li>Elaboracion de la contabilidad</li>
                      <li>Elaboracion, timbrado y pago de nominas</li>
                      <li>Movimientos afiliatorios ante el IMSS</li>
                      <li>Asesoria, revision y capacitacion contable  como asesores externos</li>
                      <li>Elaboracion de facturas de tu negocio</li>
                      <li>Elaboracion y presentacion de estados financieros</li>
                      <li>Análisis de la informacion financiera para una correcta toma de desiciones</li>
                    </ul>
                  </p>}

                  {tab.id === 2 && <p style={{ fontSize: '1.2rem', lineHeight: '30px' }}>
                    Contamos con un equipo calificado de asesores, quienes cuentan con la experiencia  en las siguientes areas:
                    <br />
                    <ul>
                      <li>Auditoria del SAT</li>
                      <li>Auditoria del IMSS</li>
                      <li>Revisiones por parete de la secretaria del trabajo y prevision social</li>
                    </ul>
                    Nuestros servicios consisten en poderte asesorar de manera adecuada en las areas antes mencionadas y asi poder cumplir de manera oportuna con la informacion que te requieran las autoridades correspondientes. Nuestros servicios  van dependiendo de las necesidades que asi lo requiera la empresa y se pueden adecuar dependiendo de la etapa donde se encuentre la revision o la solicitud de informacion
                  </p>}

                  {tab.id === 3 && <p style={{ fontSize: '1.2rem', lineHeight: '30px' }}>
                    <ul>
                      <li>Elaboración de papeles de trabajo para el correcto calculo de  impuestos.</li>
                      <li>Presentación de las declaraciones provisionales y anuales</li>
                      <li>Presentación de las declaraciones estatales</li>
                      <li>Revisión y elaboracion de papeles de trabajo para  los pagos mensuales y bimestrales ante el IMSS</li>
                      <li>Llevamos el SIROC para las empresas que asi lo requieran </li>
                      <li>Auditorias internas: esto nos permite evaluar y controlar las areas de tu negocio que requieran un mayor control</li>
                    </ul>
                  </p>}

                  {tab.id === 4 && <p style={{ fontSize: '1.2rem', lineHeight: '30px' }}>
                    <ul>
                      <li>Materia Laboral
                        <ul>
                          <li>Elaboración de contratos</li>
                          <li>Cálculo de finiquitos</li>
                          <li>Atendemos y llevamos demandas por parte  de los trabajadores</li>
                        </ul>
                      </li>
                      <li>En materia mercantil: las operaciones que realizan de manera cotidiana las empresas requieren de la elaboracion de contratos entre los cuales se encuentran:
                        <ul>
                          <li>Contratos de compra venta</li>
                          <li>Uso de marca</li>
                          <li>Comodato</li>
                          <li>Dación en pago</li>
                          <li>Entre otros</li>
                        </ul>
                      </li>
                    </ul>
                  </p>}

                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  </section>
);

export default TabsDefault;
