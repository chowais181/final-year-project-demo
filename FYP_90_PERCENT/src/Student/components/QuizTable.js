import React, { Component } from 'react'
// import ModalofEditQuiz from './ModalofEditQuiz';
import { Link, Redirect } from 'react-router-dom';
import jsPDF from 'jspdf';
import { QuestionAnswer, ThreeSixtyOutlined } from '@material-ui/icons';
import axios from 'axios';
import { RFC_2822 } from 'moment';
function pdfgenerator(quiz) {
  var imgdata = 'data:image/jpeg;base64,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';
  var pdf = new jsPDF('p', 'pt');
  pdf.addImage(imgdata, 'jpeg', 0, 0, 595, 100);
  pdf.setFont("Times New Roman", "Bold");
  pdf.setFontSize(30);

  pdf.text("Quiz", 265, 150);
  pdf.setFont("Times New Roman", "Bold");
  pdf.setFontSize(14);

  pdf.text("Teacher Name:", 28, 180);
  pdf.setFont("Times New Roman", "Bold");
  pdf.setFontSize(14);

  pdf.text(quiz.createdby, 125, 180);
  pdf.setFont("Times New Roman", "Bold");
  pdf.setFontSize(14);

  pdf.text("Total Marks:", 450, 180);
  pdf.setFont("Times New Roman", "Bold");
  pdf.setFontSize(14);

  pdf.text("20", 535, 180);


  pdf.setFont("Times New Roman", "Bold");
  pdf.setFontSize(14);

  pdf.text("Start Date Time:", 28, 210);
  pdf.setFont("Times New Roman", "Bold");
  pdf.setFontSize(14);

  pdf.text(quiz.startdate, 130, 210);
  pdf.setTextColor(255, 0, 0);
  pdf.setFont("Times New Roman", "Bold");
  pdf.setFontSize(14);

  pdf.text("Due Date Time:", 340, 210);
  pdf.setFont("Times New Roman", "Bold");
  pdf.setFontSize(14);

  pdf.text(quiz.enddate, 440, 210);
  pdf.line(28, 230, 535, 230);
  var y = 230;
  let q = 1;
  pdf.setTextColor(0, 0, 0);
  if (quiz.objective) {
    quiz.questions.map(question => {
      y = y + 80;
      if (y > 800) {
        pdf.line(28, 800, 535, 800);
        pdf.setFont("Times New Roman", "Bold");
        pdf.setFontSize(10);

        pdf.text("This is a auto-generated document and doesn't require any signature.", 150, 820);
        pdf.addPage();
        pdf.addImage(imgdata, 'jpeg', 0, 0, 595, 100);
        y = 150;
      }
      pdf.setFont("Times New Roman", "Bold");
      pdf.setFontSize(14);

      pdf.text("Qno " + q + " : ", 28, y);

      pdf.text(question.question + " (" + question.marks + " marks ).", 80, y);
      y = y + 30;

      pdf.text("(A)", 80, y);

      pdf.text(question.options[0].value, 120, y);

      pdf.text("(B)", 280, y);

      pdf.text(question.options[1].value, 320, y);
      y = y + 30;

      pdf.text("(C)", 80, y);

      pdf.text(question.options[2].value, 120, y);

      pdf.text("(D)", 280, y);

      pdf.text(question.options[3].value, 320, y);
      q = q + 1;
    });
    pdf.line(28, 800, 535, 800);
    pdf.setFont("Times New Roman", "Bold");
    pdf.setFontSize(10);

    pdf.text("This is a auto-generated document and doesn't require any signature.", 150, 820);
    pdf.addPage();
    pdf.addImage(imgdata, 'jpeg', 0, 0, 595, 100);
    pdf.setFont("Times New Roman", "Bold");
    pdf.setFontSize(30);

    pdf.text("Answer Sheet", 235, 150);
    pdf.setFont("Times New Roman", "Bold");
    pdf.setFontSize(14);

    pdf.text("Please Fill correct options", 235, 180);
    var i;
    var p = 210;
    for (i = 1; i < q; i++) {
      pdf.text("(" + (i) + ")", 80, p);
      pdf.setLineWidth(1);
      pdf.setDrawColor(0);
      pdf.circle(130, p, 10, 'S');
      pdf.text("A", 125, (p + 3));
      pdf.circle(180, p, 10, 'S');
      pdf.text("B", 175, (p + 3));
      pdf.circle(230, p, 10, 'S');
      pdf.text("C", 225, (p + 3));
      pdf.circle(280, p, 10, 'S');
      pdf.text("D", 275, (p + 3));
      p = p + 40;
    }

  }
  else {
    quiz.questions.map(question => {
      y = y + 80;
      if (y > 800) {
        pdf.line(28, 800, 535, 800);
        pdf.setFont("Times New Roman", "Bold");
        pdf.setFontSize(10);

        pdf.text("This is a auto-generated document and doesn't require any signature.", 150, 820);
        pdf.addPage();
        pdf.addImage(imgdata, 'jpeg', 0, 0, 595, 100);
        y = 150;
      }
      pdf.setFont("Times New Roman", "Bold");
      pdf.setFontSize(14);

      pdf.text("Qno " + q + " : ", 28, y);

      pdf.text(question.question + " (" + question.marks + " marks ).", 80, y);
      q = q + 1;
    });
    pdf.line(28, 800, 535, 800);
    pdf.setFont("Times New Roman", "Bold");
    pdf.setFontSize(10);

    pdf.text("This is a auto-generated document and doesn't require any signature.", 150, 820);
  }

  pdf.save(quiz.title + ".pdf");
}
export default class QuizTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalShowEdit: false,
      quizes: []
    };
    this.getquizes();
  }


  getquizes = () => {
    axios.get('http://localhost:5000/assesment/quiz')
      .then(res => {
        this.setState({
          quizes: res.data,
        })
      });
  }
  add = () => {
    this.setState({
      modalShowEdit: true,
    })
  }
  subs = () => {
    this.setState({
      modalShowEdit: false,
    })
  }





  render() {
    return (
      <div>


        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sm-12">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title ">Quiz List </h4>


                    <p class="card-category"> Here is a list of all Materials</p>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead class=" text-primary">
                          <tr>

                            {/* <th>
                              No.
            </th> */}
                            <th>
                              Title
            </th>
                            <th>
                              Start Time
            </th>
                            <th>
                              End Time
            </th>

                            <th>
                              Action
            </th>

                          </tr>
                        </thead>


                        <tbody>
                          {this.state.quizes.map(quiz => (
                            <tr>

                              {/* <td>1</td> */}
                              <td>{quiz.title} </td>
                              <td>{quiz.startdate}</td>
                              <td>{quiz.enddate} </td>

                              <td>
                                {!quiz.objective ?
                                  <i class="material-icons" style={{ cursor: 'pointer' }} onClick={() => { pdfgenerator(quiz) }}>visibility</i>
                                  :
                                  <Link className="btn btn-info btn-rounded" style={{ fontWeight: 'bold' }} to={"/play/instructions/" + quiz._id}>Attempt</Link>
                                }
                              </td>
                            </tr>
                          ))}
                          {/* <ModalofEditQuiz
                            show={this.state.modalShowEdit}
                            onHide={this.subs}
                          /> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
